class Chart {
  currentYear = '';
  currentMonth = '';
  currentDate = '';
  stateYear = '';
  stateMonth = '';
  stateDate = '';
  elementSelect = '';
  data = [];
  xAxisElement = () => {
    return `
    <div class="x-axis">
    <!-- Data Header -->
    <div class="chart-header" id="x-month-year">
      <button class="header-prev-button">
        <span>December 2022 </span>
      </button>
      <span>January 2023</span>
      <button class="header-next-button">
        <span>February 2023</span>
      </button>
    </div>
    <!-- End Data Header -->
    <!-- Chart Data -->
    <div class="chart-data" id="x-data" style="overflow: scroll">
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>21</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            <th>26</th>
            <th>27</th>
            <th>28</th>
            <th>29</th>
            <th>30</th>
            <th>31</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="10">
              <div class="data-active">
                <button data-toggle="modal" data-target="#exampleModal">
                  <span>asd</span>
                </button>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          <tr>
            <td colspan="3">
              <div class="data-active">
                <span draggable="true" style="position: absolute; left: 0; border: 1px solid red; cursor: col-resize; width: 15px; height: 30px; z-index: 999; margin: 0; padding: 0"></span>
                <span>asd</span>
                <span draggable="true" style="position: absolute; right: 0; border: 1px solid red; cursor: col-resize; width: 15px; height: 30px; z-index: 999; margin: 0; padding: 0"></span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
  
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="20">
              <div class="data-active">
                <span>asd</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End Chart Data -->
  </div>
    
    `;
  };
  yAxisElement = () => {
    return `
  <div class="y-axis">
          <!-- Data Header -->
          <div class="chart-header">
            <span>Parameters Y</span>
          </div>
          <!-- End Data Header -->
          <div class="chart-data" id="y-data" style="overflow-x: scroll; overflow-y: hidden">
            <table style="width: 100%">
              <thead>
                <tr align="left">
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Telkomsel Indonesia Sejahtera ..........................</td>
                </tr>
                <tr>
                  <td>Mitraitel</td>
                </tr>
                <tr>
                  <td>Nusa Tech</td>
                </tr>

                <!-- Nodata -->

                <!-- End No Data -->
              </tbody>
            </table>
          </div>
        </div>
  `;
  };

  templateElement = `
  <div class="wrapper">
  ${this.yAxisElement()}      
  ${this.xAxisElement()}      
  </div>
  `;
  constructor() {
    let date = new Date();
    let arrayDate = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];
    this.currentMonth = arrayDate[date.getMonth()];
    this.currentYear = date.getFullYear();
    this.currentDate = date.getDate();
    this.stateYear = this.currentYear;
    this.stateMonth = this.currentMonth;
    this.stateDate = this.currentDate;
    this.elementSelect = this.templateElement;
  }
}

class GantChart extends Chart {
  customChart = {
    style: {
      color: (color) => {
        let colors = document.querySelectorAll('.data-active');
        for (let index = 0; index < colors.length; index++) {
          colors[index].style.background = color;
        }
      },
      background: '#2c9ed7',
    },
    xAxis: {
      cell: 31,
    },
    yAxis: {
      cell: 3,
    },
  };

  setChart(element, options) {
    element.innerHTML = this.templateElement;
    this.data = ['asdasdas'];
    this.customChart.style.color('#2c9ed7');
    const xData = document.getElementById('x-data');
    const yData = document.getElementById('y-data');
    document.getElementById('x-data').addEventListener(
      'scroll',
      () => {
        yData.scrollTop = xData.scrollTop;
      },
      { passive: true }
    );
  }

  cleanChart() {
    this.currentYear = '';
    this.currentMonth = '';
    this.currentDate = '';
    this.stateYear = '';
    this.stateMonth = '';
    this.stateDate = '';
  }
}
