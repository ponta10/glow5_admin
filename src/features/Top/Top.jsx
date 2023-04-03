import { CustomButton } from '../../component/CustomButton';
import { CheckBoxField } from '../../component/CheckBoxField';
import { InputField } from '../../component/InputField';
import { RadioField } from '../../component/RadioField';
import { SelectField } from '../../component/SelectField';
import { Box, Stack, CircularProgress, } from '@mui/material';
import { HistoryTable } from '../../component/HistoryTable';
import { useEffect, useState } from 'react';
import axios, { getApi, putApi, deleteApi, postApi } from '../../lib/axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BASE_URL } from '../../utils/const';

export const Top = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const schema = Yup.object({
    name: Yup.string().required("必須です"),
  });

  const {register, handleSubmit,formState, control} = useForm(
    {
      resolver:yupResolver(schema)
    }
  )

  const getTodo = async () => {
    try{
      const res = await getApi(`${BASE_URL}/todo`);
    setData(res);
    }catch(err){
        throw err
    }finally{
        setLoading(false); // 処理が完了したらローディングを非表示にする
    }
  }

  const getUsers = async () => {
    const res = await getApi(`${BASE_URL}`);
    console.log(res);
    setUser(res);
  }

  useEffect(() => {
    getTodo();
    getUsers();
  }, []);

  const deleteTodo = async (id) => {
    const res = await deleteApi(`${BASE_URL}/todo/${id}`);
    setData(res);
  }

  const showTodo = async (id) => {
    const res = await getApi(`${BASE_URL}/todo/${id}`);
    setData(res);
  }

  const onSubmit = async (data) => {
    const res = await postApi(`${BASE_URL}/todo`,data);
    setData(res);
  }

  const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));


  return (
    <Stack spacing={2} sx={{p: 4}} >
        {loading && <CustomLinearProgress />}
              <p>{user?.name}</p>
      <ul>
        {data?.map((item) => (
            <li key={item.id} onClick={() => showTodo(item.id)}>{item.name}</li>
        ))}
      </ul>
      {/* <RadioField 
        items={["りんご","みかん","いちご"]} 
        name="fruit" 
      />
      <SelectField 
        items={["にんじん","だいこん","きゃべつ","れんこん","じゃがいも"]} 
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
        bgColor="gray.900" 
        color="red.500" 
      />
      <HistoryTable />
      <Stack component="form" onSubmit={handleSubmit(onSubmit) }>
        <InputField 
          name="name" 
          registration={register('name')} 
          error={formState.errors.name}
          helperText={formState.errors.name?.message}
        />
        <CustomButton title="送信" type="submit" />
      </Stack> */}
    </Stack>
  );
}