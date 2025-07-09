import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CountryCard = ({data}) => {
 
  return (
    <Country>
<Card>
      <Card.Img src={data?.flag} width={127} height={96} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>
{data?.region}
        </Card.Text>
      </Card.Body>
    </Card>
    </Country>
  );
};

export default CountryCard;
const Country = styled.div`
& > .card{
    box-shadow: 8px 8px 0px 0px #0000001A;
    border: solid 2px #3E3E3E;
    flex-direction: row;
    align-items: center;
    border-radius: 0;
    display: flex;
    padding: 18px;
    img{
    object-fit: cover;
    border-radius: 0;
    width: 127px;
    height: 96px;
    }
    .card-body {
        max-width: calc(100% - 155px);
        padding: 0 0 0 28px;
        .card-title {
            color: #3D3D3D;
            font-weight: 600;
            font-size: 24px;
            overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
        }
        .card-text{
            color: #6F6F6F;
            font-weight: 400;
            font-size: 16px;
              white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
        }
    }
}
`;
