import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="banner1">
        <img src={require('./assets/slide-1.jpg')} alt="" />
        <div className="text-box text-box1">
          <h1>Supervised Learning</h1>
          <span></span>
          <p>
            Supervised learning is the machine learning task of learning a
            function that maps an input to an output based on example
            input-output pairs. It infers a function from labeled training data
            consisting of a set of training examples.
          </p>
        </div>
      </div>

      <div className="banner2">
        <img src={require('./assets/slide-2.jpg')} alt="" />
        <div className="text-box text-box2">
          <h1>Unsupervised learning</h1>
          <span></span>
          <p>
            Unsupervised learning is a type of machine learning that looks for
            previously undetected patterns in a data set with no pre-existing
            labels and with a minimum of human supervision.
          </p>
        </div>
      </div>

      <div className="banner3">
        <img src={require('./assets/slide-3.jpg')} alt="" />
        <div className="text-box text-box3">
          <h1>Semi-supervised Learning</h1>
          <span></span>
          <p>
            Semi-supervised machine learning is a combination of supervised and
            unsupervised machine learning methods. With more common supervised
            machine learning methods, you train a machine learning algorithm on
            a “labeled” dataset in which each record includes the outcome
            information
          </p>
        </div>
      </div>

      <div className="banner4">
        <img src={require('./assets/slide-4.jpg')} alt="" />
        <div className="text-box text-box4">
          <h1>Reinforcement Learning</h1>
          <span></span>
          <p>
            Reinforcement learning is an area of machine learning concerned with
            how software agents ought to take actions in an environment in order
            to maximize the notion of cumulative reward. Reinforcement learning
            is one of three basic machine learning paradigms, alongside
            supervised learning and unsupervised learning.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
