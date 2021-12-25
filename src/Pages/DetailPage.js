import React from "react";
import { Spinner, Card, CardDeck, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id, title } = useParams();
  const history = useHistory()

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = async (id) => {
    try {
      setLoading(true); // start spin right here
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      //console.log(resp.data)
      setDetail(resp.data.data);
    } catch (error) {
      //console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // stop right here whatever it is(try or catch)
    }
  };

  React.useEffect(() => {
    getData(id);
  }, [id]);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, please try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Detail page</h2>
          <p>
            {title} ({id})
          </p>
          <Button className="mb-4" variant="outline-dark" onClick={() => {
              history.goBack()
          }}>Back</Button>
          <div className="row">
            <CardDeck>
              {detail.length > 0 ? (
                detail.map((d, index) => {
                  return (
                    <div className="col-md-4" key={d.ch_id}>
                      <Card className="mb-4 shadow-sm" bg="dark" text="light">
                        <Card.Body>
                          <Card.Title>{d.ch_title}</Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                        <Card.Footer>{d.ch_dateadd}</Card.Footer>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <h1>No Data</h1>
              )}
            </CardDeck>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
