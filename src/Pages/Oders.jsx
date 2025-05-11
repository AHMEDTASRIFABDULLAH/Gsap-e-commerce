import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loder from "../Components/Loder";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Oders = () => {
  const axiosPublic = useAxiosPublic();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/orders`);
      return data;
    },
  });

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Orders Report", 14, 15);

    autoTable(doc, {
      startY: 20,
      head: [
        [
          "Name",
          "Email",
          "Phone",
          "Color",
          "Size",
          "Quantity",
          "Total",
          "Address",
          "Date",
        ],
      ],
      body: orders.map((order) => {
        const orderDate = new Date(order.date);
        const formattedOrderDate = `${orderDate.getDate()}-${
          orderDate.getMonth() + 1
        }-${orderDate.getFullYear()}`;

        return [
          order.name,
          order.email,
          order.phone,
          order.color,
          order.size,
          order.quantity,
          `৳${order.total}`,
          order.address,
          formattedOrderDate,
        ];
      }),
    });

    doc.save("orders.pdf");
  };

  if (isLoading) return <Loder />;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Color</th>
              <th className="px-4 py-2 border">Size</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Date</th> {/* New Date column */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => {
              // Format the date from ISO string to dd-mm-yyyy
              const orderDate = new Date(order.date);
              const formattedOrderDate = `${orderDate.getDate()}-${
                orderDate.getMonth() + 1
              }-${orderDate.getFullYear()}`;

              return (
                <tr key={idx} className="text-center border-t">
                  <td className="px-4 py-2 border">{order.name}</td>
                  <td className="px-4 py-2 border">{order.email}</td>
                  <td className="px-4 py-2 border">{order.phone}</td>
                  <td className="px-4 py-2 border">{order.color}</td>
                  <td className="px-4 py-2 border">{order.size}</td>
                  <td className="px-4 py-2 border">{order.quantity}</td>
                  <td className="px-4 py-2 border">৳{order.total}</td>
                  <td className="px-4 py-2 border">{order.address}</td>
                  <td className="px-4 py-2 border">
                    {formattedOrderDate}
                  </td>{" "}
                  {/* Display the formatted date */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Oders;
