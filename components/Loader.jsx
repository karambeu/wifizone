function Loader() {
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border" style={{ color: '#56370c' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-center mt-3">Loading, please wait...</p>
    </div>
    </>
  )
}

export default Loader