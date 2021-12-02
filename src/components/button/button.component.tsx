import { FunctionComponent } from 'react';
import { Button as AntdButton } from 'antd';

const Button: FunctionComponent<Props> = ({ className, placeholder }) => {
	return (
		<AntdButton className={className}>
			<span>{placeholder || 'Click'}</span>
		</AntdButton>
	)
}

interface Props {
	className?: string;
	placeholder?: string;
}

export default Button;