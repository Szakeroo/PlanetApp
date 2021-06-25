import Button from '@material-ui/core/Button';
export const PaginationButton = ({text,func,link}) => {
    return(
        <Button id="pagination__button"onClick={() => { func(link) }} size="large" variant="contained" >{text}</Button>
    )
}