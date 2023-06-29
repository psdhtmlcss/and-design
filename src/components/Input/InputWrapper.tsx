import { Input } from 'antd';
import { InputProps } from 'antd';

const InputWrapper = (props: InputProps) => {
  console.log(props)
  return (
    <Input {...props} />
  )
}

export default InputWrapper;