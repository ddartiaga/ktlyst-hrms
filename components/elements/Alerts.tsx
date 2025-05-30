const DangerAlert = ({ message }: { message: string }) => {
    return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
            <div>
                {message}
            </div>
        </div>
    )
}

export { DangerAlert };