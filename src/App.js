import logo from './logo.svg';
import './App.css';
import { CustomButton } from './component/CustomButton';
import { CheckBoxField } from './component/CheckBoxField';
import { InputField } from './component/InputField';
import { RadioField } from './component/RadioField';
import { SelectField } from './component/SelectField';
import { Box, Stack } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { HistoryTable } from './component/HistoryTable';

function App() {
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
    </Stack>
  );
}

export default App;
