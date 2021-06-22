import CircularProgress from '@material-ui/core/CircularProgress'
export const Loading = () => {
    return (
        <>
            <div className="loading">
                <h2 className="loading__text">Loading...</h2>
                <br /><CircularProgress id="loading__icon" />
            </div>
        </>
    )
}