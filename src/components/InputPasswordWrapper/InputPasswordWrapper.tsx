
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { InputProps } from 'antd';

const InputPasswordWrapper = (props: InputProps) => {
  
  return (
    <Input.Password 
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      {...props}
    />
  )
}

export default InputPasswordWrapper;