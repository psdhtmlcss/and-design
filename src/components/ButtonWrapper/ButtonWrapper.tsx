import { Button, Space } from 'antd';
import { ButtonProps } from 'antd/es/button/button';

const ButtonWrapper = (props: ButtonProps) => {
  console.log(props)
  return (
    <Space wrap>
      <Button {...props} />
    </Space>
  )
}

export default ButtonWrapper;