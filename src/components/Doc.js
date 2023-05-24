import  googledoc from '../Images/googledoc.png';
import {styled} from "@mui/system";

const ImageContainer = styled('div')`
    width:40px;
    height:40px;
    background-image:url(${googledoc});
    background-size: cover;
`;
export default function Doc() {
  return(
    <div>
      <ImageContainer/>
    </div>
  )
}