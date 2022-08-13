import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DragDrop from '../components/DragDrop';
import { useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [rows, setRows] = useState([
    { id: 1, description: "", quantity: "", price: "" },
  ]);

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1, description: "",
        quantity: "", price: ""
      },
    ]);
  };

  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
  };

  return (
    <>
      <Head>
        <title>Reto Adventure ✈️</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <img src='/logoHubspot.png' alt='Logo' width={200} height={50} />
        </nav>

        <div className={styles.circle}>
          <img src='//cdn2.hubspot.net/hubfs/53/invoice%20generator/toolset.svg' width={50} height={50} />
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.container1}>
            <div className={styles.formContainer}>
              <h1 className={styles.h1}>Invoice</h1>
              <form>
                <input className={styles.inputBold} type='text' placeholder='Your Company' />
                <input className={styles.input} type='text' placeholder='Your First and Last Name' />
                <input className={styles.input} type='text' placeholder='Company Website' />
                <input className={styles.input} type='text' placeholder='Company Address' />
                <input className={styles.input} type='text' placeholder='City, State ZIP' />
                <input className={styles.input} type='text' placeholder='Country' />
                <input className={styles.input} type='tel' placeholder='Phone No.' />
                <input className={styles.input} type='email' placeholder='Email Address' />
                <input className={styles.inputBold} type='text' placeholder="Client's Comany" />
                <input className={styles.input} type='text' placeholder="Client's Name" />
                <input className={styles.input} type='text' placeholder="Client's Address" />
                <input className={styles.input} type='text' placeholder='City, State ZIP' />
                <input className={styles.input} type='text' placeholder='Country' />
              </form>
            </div>
            <div className={styles.dragContainer}>
              <div className={styles.drag}>
                <DragDrop className={styles.label} />
              </div>
              <div className={styles.formText}>
                <form>
                  <div className={styles.containerText}>
                    <label className={styles.labelDrag}>Invoince No:</label>
                    <input className={styles.inputDrag} type='text' placeholder="####" />
                  </div>
                  <div className={styles.containerText}>
                    <label className={styles.labelDrag}>Invoince Date:</label>
                    <input className={styles.inputDrag} type='date' />
                  </div>
                  <div className={styles.containerText}>
                    <label className={styles.labelDrag}>Due Date:</label>
                    <input className={styles.inputDrag} type='date' />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.container2}>
            <div className={styles.table}>
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col" colSpan={2}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">
                          <input className={styles.input} type='text' placeholder={row.id} />
                        </th>
                        <td>
                          <input className={styles.input} type='text' placeholder='Item description' />
                        </td>
                        <td>
                          <input className={styles.input} type='text' placeholder='1' />
                        </td>
                        <td>
                          <input className={styles.input} type='text' placeholder='$0.00' />
                        </td>
                        <td>
                          <button className={styles.btnDelete} onClick={() => {
                            handleRemoveClick(i);
                          }}>
                            <img src="/delete.svg" alt="Delete" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td colSpan={5} className={styles.btnPlus}>
                      <button className={styles.btn} onClick={handleAdd}> <img src="/plus.svg" alt="Add" width={32} height={16} />Add more</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.containerTextArea}>
              <p>Notes:</p>
              <textarea className={styles.textArea} placeholder='Any additional comments' />
            </div>
            <div className={styles.formText}>
              <form>
                <div className={styles.containerText}>
                  <label className={styles.labelCheck}>Subtotal:</label>
                  <input className={styles.inputDrag} type='text' defaultValue="0.00" />
                </div>
                <div className={styles.containerText}>
                  <label className={styles.labelCheck}>Tax:</label>
                  <input className={styles.inputDrag} type='text' placeholder="0 %" />
                </div>
                <div className={styles.containerText}>
                  <label className={styles.labelCheck}>Discount:</label>
                  <input className={styles.inputDrag} type='text' placeholder="0 %" />
                </div>
                <div className="table-group-divider">
                  <div className={styles.containerText}>
                    <label className={styles.labelCheck}>Total:</label>
                    <input className={styles.inputDrag} type='text' defaultValue="0.00" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className={styles.pFinal}>This invoice was created using the HubSpot <Link href='https://www.hubspot.com/invoice-template-generator'><a className={styles.a}>Invoice Template Generator</a></Link></p>
        </div>

        <div className={styles.btnDownContainer}>
          <button className={styles.btnDown}>Download Now</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
