import React, { useRef } from 'react';
import { ArrowLeft, Receipt, XCircle, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { MenuItem } from '../types';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface BillProps {
  items: MenuItem[];
  total: number;
  onBack: () => void;
  onCancelOrder: () => void;
}

const Bill: React.FC<BillProps> = ({ items, total, onBack, onCancelOrder }) => {
  const receiptRef = useRef<HTMLDivElement>(null);
  const orderNumber = Math.floor(Math.random() * 1000) + 1;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const receiptData = {
    orderNumber,
    date,
    time,
    items: items.map(item => ({
      name: item.name,
      price: item.price,
      isVeg: item.isVeg
    })),
    total
  };

  const handleDownload = async () => {
    if (receiptRef.current) {
      const canvas = await html2canvas(receiptRef.current);
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`order-receipt-${orderNumber}.pdf`);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Cart
        </button>
        <div className="flex gap-4">
          <button
            onClick={handleDownload}
            className="flex items-center text-orange-600 hover:text-orange-700 gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
          <button
            onClick={onCancelOrder}
            className="text-red-500 hover:text-red-700 flex items-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            Cancel Order
          </button>
        </div>
      </div>

      <div ref={receiptRef} className="space-y-6 bg-white rounded-lg">
        <div className="text-center">
          <Receipt className="w-12 h-12 mx-auto text-orange-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Order Receipt</h2>
        </div>

        <div className="border-t border-b py-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Order #:</span>
            <span className="font-semibold">{orderNumber}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Date:</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span>{time}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Item</th>
                  <th className="text-center py-2">Type</th>
                  <th className="text-right py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isVeg ? 'Veg' : 'Non-veg'}
                      </span>
                    </td>
                    <td className="text-right">₹{item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="py-2">Total</td>
                  <td></td>
                  <td className="text-right text-orange-600">₹{total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-4 border-t">
          <div className="bg-gray-50 p-4 rounded-lg">
            <QRCodeSVG
              value={JSON.stringify(receiptData)}
              size={120}
              level="H"
              includeMargin
            />
          </div>
          <p className="text-sm text-gray-500">Scan to view receipt details</p>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Thank you for dining with us!</p>
          <p className="text-sm mt-2">Your order will be served shortly.</p>
        </div>
      </div>
    </div>
  );
}

export default Bill;