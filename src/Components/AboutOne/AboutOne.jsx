import React from 'react'
import './AboutOne.css'

const AboutOne = () => {
  return (
    <div className="aboutone">
      <div className="about-image">
        <img
          src="https://preview.colorlib.com/theme/malefashion/img/about/about-us.jpg"
          alt=""
        />
      </div>
      <div className="about-section">
        <div className="about-item">
          <h2>Who We Are ?</h2>
          <p>
            Contextual advertising programs sometimes have strict policies that
            need to be adhered to. Let's take Google as an example.
          </p>
        </div>
        <div className="about-item">
          <h2>Who We Do ?</h2>
          <p>
            In this digital generation where information can be easily obtained
            within seconds, business cards still have retained their importance.
          </p>
        </div>
        <div className="about-item">
          <h2>Why Choose Us</h2>
          <p>
            A two or three-storey house is the ideal way to maximize the piece
            of earth on which our home sits, but for older or infirm people.
          </p>
        </div>
      </div>
      <div className="about-story">
        <div className="about-leftimage">
            <img src="https://static.vecteezy.com/system/resources/previews/025/122/784/non_2x/craftsperson-turning-wet-clay-on-pottery-wheel-creating-ceramic-vase-generated-by-ai-free-photo.jpg" alt="" />
        </div>
        <div className="about-storyline">
          <h2>Our Story</h2>
          <p>
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="teaminfo">
        <h2><br></br>Our Team</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="team-members">
            <div className="mem1">
              <img src="https://static.vecteezy.com/system/resources/previews/024/766/960/original/default-female-avatar-profile-icon-social-media-user-free-vector.jpg" alt="" />
              <h4>Chandhana</h4>
              <p>Team Leader</p>
            </div>
            <div className="mem2">
            <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="" />
            <h4>Srikar</h4>
              <p>Team Member</p>
            </div>
            <div className="mem3">
            <img src="https://static.vecteezy.com/system/resources/previews/024/766/960/original/default-female-avatar-profile-icon-social-media-user-free-vector.jpg" alt="" />
            <h4>Varshitha</h4>
            <p>Team Member</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne
