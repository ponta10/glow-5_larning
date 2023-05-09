import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import mentionStyle from "./mentionStyle";
import { useForm } from 'react-hook-form';
import { CustomButton } from "../../component/atoms/Form/CustomButton";

export const Mentions = () => {
  const [value, setValues] = useState("");

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel@nobody.com",
    },
  ];
  const { handleSubmit, register, getValues } = useForm();
  const onSubmit = (e, data) => {
    console.log(data)
  }
  return (
    <form handleSubmit={onSubmit}>
      <h2>Let's get started</h2>
      <MentionsInput
        singleLine
        style={mentionStyle}
        value={value}
        onChange={(e) => setValues(e.target.value)}
        inputRef={register('message')}
      >
        <Mention data={users} />
      </MentionsInput>
      <CustomButton title="送信" type="submit"  />
    </form>
  );
};
