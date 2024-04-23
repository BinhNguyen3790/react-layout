import { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <div className="row">

        <div className="card-group mt-5 px-5">
          <div className="card">
            <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://th.bing.com/th?id=ORMS.4143f3113f82a821cdcd7c5180d05291&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1&p=0" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Products;
