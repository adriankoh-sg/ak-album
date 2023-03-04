import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { albumGetInfo } from '@store/albumDetailSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { errorToast } from '@components/index';
import { useMount } from 'react-use';

export const Album = () => {
  // set a default params to display some stuff
  const { mbid = '6caf2472-3922-403e-90bf-19a45d98d065' } = useParams();
  const {
    data: {
      details: { album },
    },
  } = useAppSelector((state) => state.albumSlice);
  const {
    data: { currentAlbum },
  } = useAppSelector((state) => state.globalSlice);
  const dispatch = useAppDispatch();
  // call api via redux thunk to load the album base on artist selected
  const loadAlbumDetails = async () => {
    const id = mbid ?? currentAlbum;
    console.log({ id });
    try {
      await dispatch(albumGetInfo({ mbid: id })).unwrap();
    } catch (error) {
      errorToast(error);
    }
  };

  useMount(() => loadAlbumDetails());

  return (
    <Container>
      {album ? (
        <Row className="p-2">
          <Col sm={6}>
            <Card>
              <Card.Header>{album.name}</Card.Header>
              <Card.Img src={album.image[3]['#text']} />
              <Card.Body>
                <Card.Text>
                  <p>Artist: {album.artist}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Header>Tracks</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    {album.tracks.track.map((item, index) => {
                      return (
                        <ListGroup.Item key={`tracks-${index}`}>
                          <Col sm={6}>
                            <h5>{item.name}</h5>
                          </Col>
                          <Col sm={6}>
                            <p>Duration: {item.duration || '--'} sec</p>
                          </Col>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <h3>No information available</h3>
      )}
    </Container>
  );
};
