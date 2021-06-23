import Button from '@material-ui/core/Button';
export const PaginationButton = ({text,func,link}) => {
    return(
        <Button onClick={() => { func(link) }} size="large" variant="contained" color="primary">{text}</Button>
    )
}