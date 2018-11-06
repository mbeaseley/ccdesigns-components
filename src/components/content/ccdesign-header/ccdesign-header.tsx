import { Component } from '@stencil/core';

@Component({
  tag: 'ccdesign-header',
  styleUrl: 'ccdesign-header.scss'
})
export class CcdesignHeader {

  render() {
    return (
      // <header class="page__header">
      //   <nav class="navbar navbar-expand-md navbar-dark">
      //     <a class="navbar-brand">
      //       {/* <img src="../assets/favicon.ico" height="30" width="30" alt="CCDesigns" /> */}
      //     </a>
      //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <button class="navbar__back" type="button">
      //       <i class="fas fa-chevron-left icon-size"></i>
      //     </button>
      //     <div class="navbar-collapse collapse" id="collapsingNavbar3">
      //       <ul class="navbar-nav mx-auto w-100">
      //         <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      //           <a class="nav-link">Home</a>
      //         </li>
      //         <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      //           <a class="nav-link">Portfolio</a>
      //         </li>
      //         <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      //           <a class="nav-link">Contact</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </nav>
      // </header>

      <header class="header">
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand">
            <img src="./assets/favicon.ico" height="30" width="30" alt="CCDesigns" />
          </a>
          <div>
            <ul class="navbar-nav mx-auto w-100">
              <li class="nav-item">
                <a class="nav-link">HOME</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
