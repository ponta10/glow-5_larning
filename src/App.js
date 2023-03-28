import './App.css';
import { CustomButton } from './component/CustomButton';
import { CheckBoxField } from './component/CheckBoxField';
import { InputField } from './component/InputField';
import { RadioField } from './component/RadioField';
import { SelectField } from './component/SelectField';
import { Box, Stack } from '@mui/material';
import { HistoryTable } from './component/HistoryTable';
import { useEffect, useState } from 'react';
import axios, { getApi, putApi, deleteApi, postApi } from './lib/axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function App() {
  const [data, setData] = useState([]);

  const schema = Yup.object({
    name: Yup.string().required("必須です"),
  });

  const {register, handleSubmit,formState, control} = useForm(
    {
      resolver:yupResolver(schema)
    }
  )

  const getTodo = async() => {
    const res = await getApi("http://localhost/api/todo");
    await setData(res.data);
  }

  useEffect(() => {
    getTodo();
  }, []);

  const deleteTodo = async(id) => {
    const res = await deleteApi(`http://localhost/api/todo/${id}`);
    await setData(res.data);
  }

  const showTodo = async(id) => {
    const res = await getApi(`http://localhost/api/todo/${id}`);
    await setData(res.data);
  }

  const onSubmit = async(data) => {
    const res = await postApi("http://localhost/api/todo",data);
    await setData(res.data);
  }

  return (
    <Stack spacing={2} sx={{p: 4}} >
      <RadioField 
        items={["りんご","みかん"]} 
        name="fruit" 
      />
      <SelectField 
        items={["にんじん","だいこん"]} 
        name="vegetable" 
        defaultValue="にんじん" 
        label="野菜"
      />
      <InputField 
        name="fish" 
        placeholder="マグロ" 
        label="魚" 
      />
      <CustomButton 
        title="送信" 
        bgColor="#000" 
        color="#fff" 
      />
      <HistoryTable />
      <ul>
        {data.map((item) => (
          <>
            <li key={item.id} onClick={() => showTodo(item.id)}>{item.name}</li>
            <DeleteIcon onClick={() => deleteTodo(item.id)} />
          </>
        ))}
      </ul>
      <Stack component="form" onSubmit={handleSubmit(onSubmit) }>
        <InputField 
          name="name" 
          registration={register('name')} 
          error={formState.errors.name}
          helperText={formState.errors.name?.message}
        />
        <CustomButton title="送信" type="submit" />
      </Stack>
    </Stack>
  );
}

export default App;
