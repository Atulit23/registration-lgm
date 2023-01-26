import React, { useState, useEffect } from 'react'
import { store } from './store'

export default function Data({ studentD }) {
  return (
    <main style={{ width: '40%' }}>
      <div className="students">
        <div className="main__texts">
          <div className="texts">
            <p className="desc__header">Description</p>
            <p className="im__header">Image</p>
          </div>
        </div>
        {
          studentD.map((item, index) => (
            item.name_ != undefined &&
            <div className="main__students" style={index % 2 != 0 ? { background: '#9acd3263' } : { background: 'white' }}>
              <div className="data__students">
                <div className="desc">
                  <p>{item.name_}</p>
                  <p>{item.email_}</p>
                  <a href={item.website_}>{item.website_}</a>
                  <p>{item.gender_}</p>
                  <p>{item.skills_ + ' '}</p>
                  {/* {
                  item.skills_.map((skill) => {
                    <p>{skill}</p>
                  })
                } */}
                </div>
                <img src={item.image} className='dp' alt="" />
              </div>
            </div>

          ))
        }
      </div>
    </main >
  )
}
