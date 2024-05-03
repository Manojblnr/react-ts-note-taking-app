import { Stack, TextField } from "@mui/material";
import TagComponent from './TagComponent'


type NoteFormProps = {

}


const NoteForm = () => {
  return (
    <>
        <h3>Note Form</h3>
        <Stack spacing={10} width={700}>
            <Stack spacing={5} direction={'row'} sx={{ alignItems:'center'}} >
                <TextField variant="outlined" label='Title' size="small"></TextField>
                <TagComponent/>
            </Stack>
            <Stack>
                <TextField label='body' multiline rows={10} defaultValue={'default value'}></TextField>
            </Stack>
        </Stack>
    </>
  )
};

export default NoteForm;



const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
]