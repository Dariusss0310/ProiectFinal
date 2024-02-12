import React from 'react'

export default function Header() {
  return (
        // Page header with logo and tagline
        <header className="py-3 bg-light border-bottom ">  
            <div className="container">
                <div className="text-center my-3">
                    <h1 className="fw-bolder">Welcome to a blog dedicated to Esports Fanarts!</h1>
                    <p className="lead mb-0">This space is dedicated to FanArts lovers!</p>
                    <p className="lead mb-0">Register now and upload your fanarts today</p>
                </div>
            </div>
        </header>
  )
}