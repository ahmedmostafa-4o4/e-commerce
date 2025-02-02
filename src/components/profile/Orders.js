import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTruckFast,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Orders({ auth }) {
  return (
    <div className="user orders-page">
      <div className="user-nav">
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Search..."
        ></input>

        <p>
          <span>12</span> Orders
        </p>
      </div>
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>125422852</th>
              <th>18 AUG</th>
              <th>Ahmed Mostafa</th>
              <th>123 Main St, City</th>
              <th>$1260.00</th>
              <th className="status status-delivered">
                <FontAwesomeIcon icon={faCircleCheck} /> Delivered
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Image</th>
              <th>Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button
                  className="return-btn"
                  onClick={() => {
                    Swal.fire({
                      title: "Descripe why you want to return this item.",
                      html: '<textarea id="swal-input1" class="swal2-textarea" placeholder="Type here..." style="width: 100%; height: 150px; margin: 0;"></textarea>',

                      showCancelButton: true,
                      preConfirm: () => {
                        const input =
                          document.getElementById("swal-input1").value;
                        if (!input) {
                          Swal.showValidationMessage(
                            "You need to write something!"
                          );
                        }
                        return input;
                      },
                    }).then((data) => {});
                  }}
                >
                  Return
                </button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>18 AUG</th>
              <th>Ahmed Mostafa</th>
              <th>123 Main St, City</th>
              <th className="status status-precessing">
                <FontAwesomeIcon icon={faSpinner} spin /> Processing
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Image</th>
              <th>Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>18 AUG</th>
              <th>Ahmed Mostafa</th>
              <th>123 Main St, City</th>
              <th className="status status-shipped">
                <FontAwesomeIcon icon={faTruckFast} /> Shipped
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Image</th>
              <th>Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
            <tr>
              <td>2024-08-19</td>
              <td>
                <img src="" alt="" />
              </td>
              <td>Product A</td>
              <td>$220</td>
              <td>18</td>
              <td>
                <button className="return-btn">Return</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
