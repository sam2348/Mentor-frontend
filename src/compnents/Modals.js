import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:650,
  bgcolor: 'background.paper',
  border: '2px solid whitesmoke',
  boxShadow: 24,
  p: 4,
};
const Modals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
    <Fade in={open}>
    <Box sx={style}> 
      {/*------------------------------------------------------------ROW4*/}
      {/*----------------------------------Image*/} 
      {/* <div>
        <div className="container w-11/15 mx-auto px-4 py-4 mt-4 border border-slate-300 bg-white rounded ">
          <div>
            <h5 className="  p-2 font-medium leading-tight text-xl mt-0 mb-2 text-black">Photo</h5>
          </div>
          <div className="mt-1 flex items-center">
            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Upload Photo</button>
            </div>
            </div>
            {/*----------------------------------Image*/}
            {/*----------------------------------Languages*/}
       {/*<div>
        <div className="container w-11/15 mx-auto px-4 py-4 mt-4 border border-slate-300 bg-white rounded ">
          <div>
            <h5 className="  p-2 font-medium leading-tight text-xl mt-0 mb-2 text-black">Select Languages</h5>
          </div>
          <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
            <li>
              <div className="flex items-center">
                <input id="checkbox-item-1" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="checkbox-item-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input defaultChecked id="checkbox-item-2" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="checkbox-item-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hindi</label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input id="checkbox-item-3" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="checkbox-item-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Punjabi</label>
              </div>
            </li>
          </ul>
          <button type="button" className="ml-5 rounded-md border border-gray-300 bg-blue-800 text-white py-2 px-3 text-sm font-medium shadow-sm ">Save</button>
        </div>
      </div>
      </div> */}
      {/* <!------------------------------------Languages-->
      <!-----------------------------------Bio--> */}
   
      {/* <!------------------------------------Bio-->
        <!-----------------------------------Skills--> */}
   
      {/* <!------------------------------------Skills-->
        <!-----------------------------------Education--> */}
   
      {/* <!-----------------------------------Education-->
      <!-----------------------------------Experience--> */}
   
       </Box>
     </Fade>
   </Modal>
 </div>
</>
)
}
export default Modals
