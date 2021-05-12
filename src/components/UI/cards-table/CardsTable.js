import React from 'react';
import './CardsTable.css'

const CardsTable = () => {
    return (
        <div>
           <div class="container  mt-3">
  <table class="table main-table">
  {/* <tbody>
                    {filteredCampaigns.map(
                      (
                        {
                          id,
                          title,
                          description, // status,
                          remarks,
                          startDate,
                          endDate,
                          isActive
                        },
                        index
                      ) => (
                        <tr key={index} className="clickable-row">
                          <td>{index + 1}</td>
                          <td className="clickable-name">
                            <Link
                              to={`/admin/campaigns/view-camapign-details/${id}`}
                            >
                              {title}
                            </Link>
                          </td>
                          <td>{description}</td>
                          <td>{isActive ? "Active" : "Inactive"}</td>
                          <td>{moment(startDate).format("DD/MM/YYYY")}</td>
                          <td>{moment(endDate).format("DD/MM/YYYY")}</td>
                    
                        </tr>
                      )
                    )}
                  </tbody> */}
  </table>
</div>
 
        </div>
    )
}

export default CardsTable
