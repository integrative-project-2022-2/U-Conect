import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({ materia }) {
  const [materias, setMateria] = React.useState("");

  const handleChange = (event) => {
    setMateria(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Materia</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={materias}
          onChange={handleChange}
          autoWidth
          label="Materia"
        >
          {materia.map((text) =>
            <MenuItem value={text}>{text}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}