import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Dropdown, Button } from 'react-bootstrap';
import { getTopAlbum } from '@store/homePageSlice';
import { setCurrentAlbum } from '@store/globalSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { errorToast, Spinner } from '@components/index';
import type { TAlbum } from '@store/stateDataTypes';
import { CONFIG } from '@config/settings';
import type { TArtist } from '@store/stateDataTypes';

interface IItemDisplay {
  item: TAlbum;
}

const {
  api: { defaultArtist },
} = CONFIG;

export const HomePage = () => {
  const {
    data: { isLoading, album },
  } = useAppSelector((state) => state.homePageSlice);
  const {
    data: { artistList },
  } = useAppSelector((state) => state.globalSlice);
  const dispatch = useAppDispatch();
  const [artist, setArtist] = useState<TArtist>(defaultArtist);
  const navigate = useNavigate();

  // call api via redux thunk to load the album base on artist selected
  const loadTopArtists = async () => {
    try {
      await dispatch(getTopAlbum({ mbid: artist.mbid })).unwrap();
    } catch (error) {
      errorToast(error);
    }
  };

  useEffect(() => {
    void loadTopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  const handleViewDetails = (name: string, id: string) => {
    // set the current selected data to global state and navigate to Album page
    dispatch(setCurrentAlbum({ name, mbid: id }));
    navigate(`/album/${id}`);
  };

  /**
   * Function to render ONE item (one Album)
   */
  const ItemDisplay = ({ item }: IItemDisplay) => {
    const { name, playcount, url, image, mbid } = item;
    const imgSrc = image[3]['#text'] ?? 'holder.js/300px300';

    return (
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Row>
            <Col md={6}>
              <Button variant="primary" style={{ width: '100%' }} onClick={() => handleViewDetails(name, mbid)}>
                Details
              </Button>
            </Col>
            <Col md={6}>
              <a href={url} target="_blank">
                <Button variant="secondary" style={{ width: '100%' }}>
                  Visit Site
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <small className="text">Play count: </small>
          <small className="text-muted">{playcount}</small>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Container>
      <Row md={6} style={{ alignItems: 'center', padding: 10 }}>
        <h5>Feature Artist:</h5>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ width: 200 }}>
            {artist.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {artistList.map((item, index) => {
              return (
                <Dropdown.Item key={`key-${index}`} onClick={() => setArtist({ name: item.name, mbid: item.mbid })}>
                  {item.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Row>

      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          album.map((item: TAlbum, index) => {
            return (
              <Col md={4} style={{ padding: 5 }} key={`album-${index}`}>
                <ItemDisplay item={item} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};
