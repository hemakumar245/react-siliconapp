import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../../Pages/_pagestyles.scss';
import SideNavigation from "../../sidemenubar/SideNavigation";

export class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterall: "btn active",
      apparel: "btn",
      accessories: "btn",
      home: "btn",
      salon: "btn",
      speciality: "btn",
      sales: "btn",
      current: "all",
      apparelimg: "column apparel show",
      accessoriesimg: "column accessories show",
      homeimg: "column home show",
      salonimg: "column salon show",
      specialityimg: "column speciality show",
      salesimg: "column sales show"
    };
  }

  changeClass = btn => {
    switch (btn) {
      case "all":
        this.setState({
          filterall: "btn active",
          apparel: "btn",
          accessories: "btn",
          home: "btn",
          salon: "btn",
          speciality: "btn",
          sales: "btn",
          current: btn,
          apparelimg: "column apparel show",
          accessoriesimg: "column accessories show",
          homeimg: "column home show",
          salonimg: "column salon show",
          specialityimg: "column speciality show",
          salesimg: "column sales show"
        });

        return true;
      case "apparel":
        this.setState({
          current: btn,
          filterall: "btn",
          apparel: "btn active",
          accessories: "btn",
          home: "btn",
          salon: "btn",
          speciality: "btn",
          sales: "btn",
          apparelimg: "column apparel show",
          accessoriesimg: "column accessories ",
          homeimg: "column home ",
          salonimg: "column salon ",
          specialityimg: "column speciality ",
          salesimg: "column sales "
        });
        return true;
      case "accessories":
        this.setState({
          current: btn,
          filterall: "btn ",
          apparel: "btn",
          accessories: "btn active",
          home: "btn",
          salon: "btn",
          speciality: "btn",
          sales: "btn",
          apparelimg: "column apparel ",
          accessoriesimg: "column accessories show",
          homeimg: "column home ",
          salonimg: "column salon ",
          specialityimg: "column speciality ",
          salesimg: "column sales "
        });
        return true;
      case "home":
        this.setState({
          current: btn,
          filterall: "btn ",
          apparel: "btn",
          accessories: "btn",
          home: "btn active",
          salon: "btn",
          speciality: "btn",
          sales: "btn",
          apparelimg: "column apparel ",
          accessoriesimg: "column accessories ",
          homeimg: "column home show",
          salonimg: "column salon ",
          specialityimg: "column speciality ",
          salesimg: "column sales "
        });
        return true;
      case "salon":
        this.setState({
          current: btn,
          filterall: "btn ",
          apparel: "btn",
          accessories: "btn",
          home: "btn",
          salon: "btn active",
          speciality: "btn",
          sales: "btn",
          apparelimg: "column apparel ",
          accessoriesimg: "column accessories ",
          homeimg: "column home ",
          salonimg: "column salon show",
          specialityimg: "column speciality ",
          salesimg: "column sales "
        });
        return true;
      case "speciality":
        this.setState({
          current: btn,
          filterall: "btn ",
          apparel: "btn",
          accessories: "btn",
          home: "btn ",
          salon: "btn",
          speciality: "btn active",
          sales: "btn",
          apparelimg: "column apparel ",
          accessoriesimg: "column accessories ",
          homeimg: "column home ",
          salonimg: "column salon ",
          specialityimg: "column speciality show",
          salesimg: "column sales "
        });
        return true;
      case "sales":
        this.setState({
          current: btn,
          filterall: "btn ",
          apparel: "btn",
          accessories: "btn",
          home: "btn",
          salon: "btn",
          speciality: "btn",
          sales: "btn",
          apparelimg: "column apparel ",
          accessoriesimg: "column accessories ",
          homeimg: "column home ",
          salonimg: "column salon ",
          specialityimg: "column speciality ",
          salesimg: "column sales show"
        });
        return true;
      default:
        console.log("nothing", btn);
        return false;
    }
  };

  //   componentDidMount() {
  //     // filterSelection("all");
  //     function filterSelection(c) {
  //       var x, i;
  //       x = document.getElementsByClassName("buttonfilter");
  //       if (c == "all") c = "";
  //       for (i = 0; i < x.length; i++) {
  //         RemoveClass(x[i], "active");
  //         if (x[i].className.indexOf(c) > -1) AddClass(x[i], "active");
  //       }
  //     }

  //     function AddClass(element, name) {
  //       var i, arr1, arr2;
  //       arr1 = element.className.split(" ");
  //       arr2 = name.split(" ");
  //       for (i = 0; i < arr2.length; i++) {
  //         if (arr1.indexOf(arr2[i]) == -1) {
  //           element.className += " " + arr2[i];
  //         }
  //       }

  //       console.log("add class", element, name, arr1);
  //     }

  //     function RemoveClass(element, name) {
  //       var i, arr1, arr2;
  //       arr1 = element.className.split(" ");
  //       arr2 = name.split(" ");
  //       for (i = 0; i < arr2.length; i++) {
  //         while (arr1.indexOf(arr2[i]) > -1) {
  //           arr1.splice(arr1.indexOf(arr2[i]), 1);
  //         }
  //       }

  //       console.log("remove class", element, name, arr1);

  //       element.className = arr1.join(" ");
  //     }

  //     // Add active class to the current button (highlight it)
  //     var btnContainer = document.getElementById("gallery-list");
  //     var btns = btnContainer.getElementsByClassName("btn");
  //     for (var i = 0; i < btns.length; i++) {
  //       btns[i].addEventListener("click", function() {
  //         var current = document.getElementsByClassName("active");
  //         current[0].className = current[0].className.replace(" active", "");
  //         this.className += " active";
  //       });
  //     }
  //   }

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <section className="main-content">
          <SideNavigation />
          <div className="main-wrapper-content">
            <div className="pagewrapper-background shopping">
              <div className="pagewrapper-overlay text-center">
                <Container>
                  <Row>
                    <Col lg={{ span: 10, offset: 1 }}>
                      <div className="page-top-section">
                        <h3>Silicon Hills</h3>
                        <div className="page-title">
                          <h1 className="section-title p-0">Shopping</h1>
                          <p>
                            Mon-Sat :<span className="pl-3">10AM <i className="fas fa-horizontal-rule"></i> 9PM</span>
                          </p>
                          <p>
                            Sun :<span className="pl-3">11AM <i className="fas fa-horizontal-rule"></i> 7PM</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="gallery py-4 px-5">
              <Container>
                <div className="d-flex justify-content-between align-items-center">
                  <div id="gallery-list" className="text-uppercase">
                    <button
                      className={this.state.filterall}
                      onClick={() => {
                        this.changeClass("all");
                      }}
                    >
                      {" "}
                      All
                    </button>
                    <button
                      className={this.state.apparel}
                      onClick={() => {
                        this.changeClass("apparel");
                      }}
                    >
                      {" "}
                      Apparel
                    </button>
                    <button
                      className={this.state.accessories}
                      onClick={() => {
                        this.changeClass("accessories");
                      }}
                    >
                      {" "}
                      Accessories
                    </button>
                    <button
                      className={this.state.home}
                      onClick={() => {
                        this.changeClass("home");
                      }}
                    >
                      {" "}
                      Home
                    </button>
                    <button
                      className={this.state.salon}
                      onClick={() => {
                        this.changeClass("salon");
                      }}
                    >
                      {" "}
                      Salon & Spa
                    </button>
                    <button
                      className={this.state.speciality}
                      onClick={() => {
                        this.changeClass("speciality");
                      }}
                    >
                      {" "}
                      Speciality
                    </button>
                    <button
                      className={this.state.sales}
                      onClick={() => {
                        this.changeClass("sales");
                      }}
                    >
                      {" "}
                      Sales
                    </button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link text-dark">
                      <i className="fas fa-th-large" />
                    </button>
                    <button className="btn btn-link text-dark">
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                <Row className="pt-4">
                  <br />

                  <Container className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p align="center">Coming Soon.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Container>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  {/* <div className={this.state.apparelimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-5 px-4 mb-3">
                        <img
                          src={require("../assets/images/soulcycle.png")}
                          alt="Image"
                          className="img-fluid py-3"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={this.state.apparelimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-5 mb-3">
                        <img
                          src={require("../assets/images/tesla.png")}
                          className="img-fluid py-3"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={this.state.accessoriesimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-5 mb-3">
                        <img
                          src={require("../assets/images/usbank.png")}
                          alt="Image"
                          className="img-fluid pb-1"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={this.state.accessoriesimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content mb-3">
                        <img
                          src={require("../assets/images/barrys.png")}
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={this.state.homeimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-3 px-5 mb-3">
                        <img
                          src={require("../assets/images/makers.png")}
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={this.state.salonimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-5 px-5 mb-3">
                        <img
                          src={require("../assets/images/casper.png")}
                          alt="Image"
                          className="img-fluid py-2"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={this.state.specialityimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-5 px-5 mb-3">
                        <img
                          src={require("../assets/images/amazonbooks.png")}
                          alt="Image"
                          className="img-fluid pt-3 pb-4"
                        />
                      </div>

                    </Link>
                  </div>
                  <div className={this.state.salesimg}>
                    <Link to="/shlanding">
                      <div className="card border-0 content py-4 px-5 mb-3">
                        <img
                          src={require("../assets/images/aesop.png")}
                          alt="Image"
                          className="img-fluid pt-3 pb-2"
                        />
                      </div>
                    </Link>
                  </div> */}
                </Row>
              </Container>
            </div>

            <div className="copyright py-3 text-center">
              <p>2020 Silicon Hills. All rights reserved</p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Shopping;
