import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loder from "../Components/Loder";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FiDownload } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Oders = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/orders`);
      return data;
    },
  });

  const handelDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete("/delete-oder");
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
    });

    // Add modern header with logo and title
    doc.setFillColor(63, 81, 181);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 20, "F");
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("ORDER REPORT", 105, 15, { align: "center" });

    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(
        `Page ${i} of ${pageCount}`,
        doc.internal.pageSize.getWidth() - 20,
        doc.internal.pageSize.getHeight() - 10
      );
      doc.text(
        new Date().toLocaleDateString(),
        20,
        doc.internal.pageSize.getHeight() - 10
      );
    }

    // Main content
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");

    autoTable(doc, {
      startY: 25,
      theme: "grid",
      headStyles: {
        fillColor: [63, 81, 181],
        textColor: 255,
        fontStyle: "bold",
        fontSize: 10,
        cellPadding: 3,
      },
      bodyStyles: {
        cellPadding: 3,
        fontSize: 9,
        overflow: "linebreak",
        valign: "middle",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      columnStyles: {
        0: { cellWidth: 25, halign: "left" }, // Name
        1: { cellWidth: 35, halign: "left" }, // Email
        2: { cellWidth: 20 }, // Phone
        3: { cellWidth: 15 }, // Color
        4: { cellWidth: 15 }, // Size
        5: { cellWidth: 15 }, // Quantity
        6: { cellWidth: 20 }, // Total
        7: { cellWidth: "auto", halign: "left" }, // Address
        8: { cellWidth: 20 }, // Date
      },
      margin: { horizontal: 5 },
      head: [
        [
          "Name",
          "Email",
          "Phone",
          "Color",
          "Size",
          "Qty",
          "Total",
          "Address",
          "Date",
        ],
      ],
      body: orders.map((order) => {
        const orderDate = new Date(order.date);
        const formattedOrderDate = orderDate.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        return [
          order.name,
          order.email,
          order.phone,
          order.color,
          order.size,
          order.quantity,
          `TK ${order.total.toLocaleString()}`,
          order.address,
          formattedOrderDate,
        ];
      }),
      didDrawPage: (data) => {
        // Add watermark
        doc.setFontSize(60);
        doc.setTextColor(230, 230, 230);
        doc.setFont("helvetica", "bold");
        // doc.text("CONFIDENTIAL", 105, 80, { align: "center", angle: 45 });
        doc.setTextColor(0, 0, 0);
      },
    });

    doc.save(`orders-report-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  if (isLoading) return <Loder />;
  window.scrollTo(0, 0);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Order Management
            </h2>
            <p className="text-gray-600">{orders.length} orders found</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={generatePDF}
              className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <FiDownload className="text-lg" />
              PDF
            </button>
            <button
              onClick={handelDelete}
              className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <MdDeleteForever className="text-lg " />
              Delete
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, idx) => {
                  const orderDate = new Date(order.date);
                  const formattedOrderDate = orderDate?.toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  );

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {order?.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {order.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.phone}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {order.address}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-4">
                          <div>
                            <span className="text-xs text-gray-500">Color</span>
                            <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                              <span
                                className="inline-block h-3 w-3 rounded-full"
                                style={{
                                  backgroundColor: order?.color.toLowerCase(),
                                }}
                              ></span>
                              {order.color}
                            </div>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">Size</span>
                            <div className="text-sm font-medium text-gray-900">
                              {order.size}
                            </div>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">Qty</span>
                            <div className="text-sm font-medium text-gray-900">
                              {order.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-blue-600">
                          TK {order?.total.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          Order #{idx + 1000}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formattedOrderDate}
                        </div>
                        <div className="text-xs text-gray-500">
                          {orderDate?.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oders;
