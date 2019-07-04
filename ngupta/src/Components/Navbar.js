import React from "react";
import "./Navbar.css";
import $ from "jquery";

class Navbar extends React.Component {
  componentDidMount() {
    // Closes the sidebar menu
    $(".menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      );
      $(this).toggleClass("active");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $("#sidebar-wrapper .js-scroll-trigger").click(function() {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      );
    });
  }
  render() {
    return (
      <div class="ui container menu">
        <a class="menu-toggle rounded" href="https://ngupta.me">
          <i class="fas fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <a class="js-scroll-trigger" href="#page-top">
                Home
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#services">
                Projects
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a
                class="js-scroll-trigger"
                href="https://medium.com/@nguptaa/kwoc-kharagpur-winter-of-code-final-report-6d9d73ee7428"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
