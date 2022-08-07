import React, { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductList = () => {
  const [loadign, setLoadign] = useState(true);
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);

  useEffect(() => {
    const getPosts = [];
    const getPosts2 = [];

    const subscriber = projectFirestore
      .collection("Products")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts.push({
            ...doc.data(),
            key: doc.id,
          });
        });

        setPosts(getPosts);

        setLoadign(false);
      });

    const subscriber2 = projectFirestore
      .collection("Orders")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts2.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts2(getPosts2);
      });
    if (loadign) {
      return <h1>Loading data...</h1>;
    }
    return () => {
      subscriber();
      subscriber2();
    };
  }, []);

  const OrderPending = () => {
    const getPosts3 = [];

    projectFirestore
      .collection("Orders")
      .where("orderStatus", "==", "Pending")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts3.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts2(getPosts3);
      });
  };
  const OrderCompleted = () => {
    const getPosts4 = [];
    projectFirestore
      .collection("Orders")
      .where("orderStatus", "==", "Completed")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts4.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts2(getPosts4);
      });
  };

  const AllOrders = () => {
    const getPosts5 = [];
    projectFirestore
      .collection("Orders")

      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts5.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts2(getPosts5);
      });
  };
  const IVS = () => {
    const getPosts14 = [];
    projectFirestore
      .collection("Products")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts14.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts14);
      });
  };
  const CPU = () => {
    const getPosts6 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "CPU")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts6.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts6);
      });
  };
  const Motherboard = () => {
    const getPosts7 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "Motherboard")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts7.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts7);
      });
  };
  const CPU_Cooler = () => {
    const getPosts8 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "CPU Cooler")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts8.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts8);
      });
  };
  const Memory = () => {
    const getPosts9 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "Memory")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts9.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts9);
      });
  };
  const Monitor = () => {
    const getPosts11 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "Monitor")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts11.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts11);
      });
  };
  const VC = () => {
    const getPosts12 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "GPU")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts12.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts12);
      });
  };
  const PSU = () => {
    const getPosts12 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "PSU")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts12.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts12);
      });
  };
  const Storage = () => {
    const getPosts13 = [];
    projectFirestore
      .collection("Products")
      .where("productCategory", "==", "Storage")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPosts13.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPosts13);
      });
  };
  return (
    <>
      <div>
        <h1>Orders</h1>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 10 }}
          onClick={() => {
            OrderPending();
          }}
        >
          Orders pending
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 10 }}
          onClick={() => {
            OrderCompleted();
          }}
        >
          Orders Completed
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 10 }}
          onClick={() => {
            AllOrders();
          }}
        >
          All Orders
        </button>
        <TableContainer component={Paper} className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Ordered By</TableCell>
                <TableCell className="tableCell">Status</TableCell>
                <TableCell className="tableCell">Category</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts2.map((row) => (
                <TableRow key={row.productID}>
                  <TableCell className="tableCell">{row.orderOf}</TableCell>
                  <TableCell className="tableCell">{row.orderStatus}</TableCell>
                  <TableCell className="tableCell">{row.productCategory}</TableCell>
                  <TableCell className="tableCell">{row.productName}</TableCell>
                  <TableCell className="tableCell">{row.productPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      <div>
        <h1>Current Stock</h1>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5 }}
          onClick={() => {
            IVS();
          }}
        >
          All Products
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            CPU();
          }}
        >
          CPU
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            Motherboard();
          }}
        >
          Motherboard
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            CPU_Cooler();
          }}
        >
          CPU Cooler
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            Memory();
          }}
        >
          Memory
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            Monitor();
          }}
        >
          Monitor
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            VC();
          }}
        >
          GPU
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            PSU();
          }}
        >
          Power Supply
        </button>
        <button
          style={{ background: "#1f9751", color: "white", borderColor: "white", fontSize: 14, margin: 5  }}
          onClick={() => {
            Storage();
          }}
        >
          Storage
        </button>
        <TableContainer component={Paper} className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Product ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Category</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((row) => (
                <TableRow key={row.productID}>
                  <TableCell className="tableCell">{row.productID}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.productImage} alt="" className="image" />
                      {row.productName}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.productCategory}
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.productDescription}
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.productPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ProductList;
