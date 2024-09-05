import React from 'react'
import './list.css'

const List = () => {
  return (
    <div className="tb">
    <table>
        <thead align="left">
            <tr>
                <th>
                    <input type="checkbox"></input>
                    Order ID
                </th>
                <th>
                    Created
                </th>
                <th>
                    Customer
                </th>
                <th>
                    Fulfillment
                </th>
                <th>
                    Total
                </th>
                <th>
                    Profit
                </th>
                <th>
                    status
                </th>
                <th align="right">
                    Updated
                </th>
            </tr>
        </thead>
        <tbody align="left">
            <tr>
                <td>
                    <input type="checkbox"></input>
                    211
                </td>
                <td>
                    Aug, 27, 2024
                </td>
                <td>
                    <div className="pic"></div>
                    sahil
                </td>
                <td>
                    <select name="Fulfilled">
                        <option value="Fulfilled">Fulfilled</option>
                    </select>
                </td>
                <td>
                    $604.50
                </td>
                <td>
                    $182
                </td>
                <td>
                    <select name="Authorized">
                        <option value="Authorized">Authorized</option>
                    </select>
                </td>
                <td align="right">
                    Today
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"></input>
                    212
                </td>
                <td>
                    Aug, 26, 2024
                </td>
                <td>
                    <div className="pic"></div>
                    <div className="nm">Varun</div>
                </td>
                <td>
                    <select name="Pending-Reciept">
                        <option value="Pending-Reciept">Pending Reciept</option>
                    </select>
                </td>
                <td>
                    $484.50
                </td>
                <td>
                    $112
                </td>
                <td>
                    <select name="Paid">
                        <option value="Paid">Paid</option>
                    </select>
                </td>
                <td align="right">
                    Yesterday
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"></input>
                    213
                </td>
                <td>
                    Aug, 25, 2024
                </td>
                <td>
                    <div className="pic"></div>
                    Gourav
                </td>
                <td>
                    <select name="Unfulfilled">
                        <option value="Unfulfilled">Unfulfilled</option>
                    </select>
                </td>
                <td>
                    $394.50
                </td>
                <td>
                    $82
                </td>
                <td>
                    <select name="Paid">
                        <option value="Paid">Paid</option>
                    </select>
                </td>
                <td align="right">
                    Today
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"></input>
                    214
                </td>
                <td>
                    Aug, 26, 2024
                </td>
                <td>
                    <div className="pic"></div>
                    Abhinav
                </td>
                <td>
                    <select name="Unfulfilled">
                        <option value="Unfulilled">Unfulfilled</option>
                    </select>
                </td>
                <td>
                    $404.50
                </td>
                <td>
                    $82
                </td>
                <td>
                    <select name="Authorized">
                        <option value="Authorized">Authorized</option>
                    </select>
                </td>
                <td align="right">
                    Yesterday
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"></input>
                    215
                </td>
                <td>
                    Aug, 22, 2024
                </td>
                <td>
                    <div className="pic"></div>
                    Tushar
                </td>
                <td>
                    <select name="Pending-Reciept">
                        <option value="Pending-Reciept">Pending Reciept</option>
                    </select>
                </td>
                <td>
                    $524.50
                </td>
                <td>
                    $122
                </td>
                <td>
                    <select name="Paid">
                        <option value="Paid">Paid</option>
                    </select>
                </td>
                <td align="right">
                    Yesterday
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default List