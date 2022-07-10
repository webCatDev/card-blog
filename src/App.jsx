import React, { Fragment } from "react";
import profilePhoto from '../photos/profile-photo.jpg'
import GoHomeIcon from "./components/UI/Icons/GoHomeIcon";
import GoBackIcon from "./components/UI/Icons/GoBackIcon";
import SettingsIcon from "./components/UI/Icons/SettingsIcon";


function App() {
  return (
    <Fragment>
      <header>
        <article className="flex items-center p-4 space-x-4 md:mx-auto md:max-w-md">
          <img src={profilePhoto} alt="profile-photo" className="rounded-full w-16"/>
          <p className="font-semibold">Merhaba ben <strong className="text-indigo-500">Neslihan.</strong><br />Bloğuma hoş geldin!</p>
        </article>
      </header>
      <main>
        <ul className="flex flex-col space-y-10 items-center py-16">
          <li className="w-2/3 max-w-md"><a href="" className="text-center py-2 px-4 bg-indigo-200 text-indigo-900 border-2 block rounded-full border-indigo-700">Son Yazılarım</a></li>
          <li className="w-2/3 max-w-md"><a href="" className="text-center py-2 px-4 bg-indigo-200 text-indigo-900 border-2 block rounded-full border-indigo-700">Okuduğum Kitaplar</a></li>
          <li className="w-2/3 max-w-md"><a href="" className="text-center py-2 px-4 bg-indigo-200 text-indigo-900 border-2 block rounded-full border-indigo-700">Çalışmalarım</a></li>
        </ul>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-black">
        <nav className="max-w-md mx-auto">
          <ul className="flex justify-between p-4">
            <li><button className="text-indigo-200" title="Geri dön" aria-label="Geri dön"><GoBackIcon /></button></li>
            <li><button className="text-indigo-200" title="Ana sayfaya dön" aria-label="Ana sayfaya dön"><GoHomeIcon/></button></li>
            <li><button className="text-indigo-200" title="Ayarlar" aria-label="Ayarlar"><SettingsIcon/></button></li>     
          </ul>
        </nav>
      </footer>
    </Fragment>
  );
}

export default App;
