import './App.css'
import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

import '../src/i18n/i18n';
let logo = import.meta.env.VITE_LOGO_URL

function App() {


  const { t, i18n} = useTranslation(['home']);
  return (
    <div className="App">
                  <div>
                    <button value= "en" onClick={() => i18n.changeLanguage('en')}><img className="w-10 h-6" src='https://www.worldometers.info/img/flags/us-flag.gif'/></button>
                    <button value= "de" onClick={() => i18n.changeLanguage('ptbr')}><img  className="w-10 h-6" src='https://www.worldometers.info/img/flags/br-flag.gif'/></button>
            </div>
      <div>
          <img src={logo} className="modeHorizontal" alt="Main Logo" />
      </div>
      <h1>{t('title')}</h1>

      <div className="card">
        {t('steps')}
      </div>
      <div>
      <p>
        <ul>
          <li >{t('env')}</li>
          <li className='text-primary'>{t('colors')}</li>
          <li >{t('logoPos')}</li>
          <li>{t('features')}</li>
        </ul>
      </p>
      </div>
      <div className=" mt-4">
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
        >
          {t('button')}
        </button>
        <button
          className="bg-success hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          {t('button')}
        </button>

        <button
          className="bg-error hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          {t('button')}
        </button>
        <button
          className="bg-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          
        >
          {t('button')}
        </button>
        <div>
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center border-red-300 border-2 mt-4 flex-wrap">
          <img className="max-h-full max-w-full p-4" src={logo} alt="Box with image" />
          <p> {t('bgEg')}</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default App
