import { FunctionComponent } from "react";
import Button from '../../components/button';

const Header: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Button placeholder="Es un botón"/>
      <Button/>
    </div>
  )
}

interface Props {
  className?: string;
}

export default Header;