function Loader() {
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-center mt-3">Loading, please wait...</p>
    </div>
    </>
  )
}

export default Loader