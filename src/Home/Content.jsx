import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

require('../styles/Sections.less');


class Section extends React.Component {

  render() {
    const { children, ...props } = this.props;
    return (
      <section {...props}>
        <div className="picture"/>
        {children}
      </section>
    );
  }

}


export default class Content extends React.Component {

  render() {
    return (
      <main>
        <Navbar />
        <section>
          Check out my blog <Link to="/blog">here!</Link>
        </section>
        <Section id="education">
          <p>
            I'm a student at Wilfrid Laurier University in Ontario, Canada. I'm in
            the business and computer science double degree program, with a co-op
            option. This means that I hope to graduate with two degrees &mdash; a
            Bachelor of Business Administration and a Bachelor's of Science in
            Computer Science &mdash; and I'm gaining work experience along the way!
          </p>
        </Section>
        <Section id="dev-skills">
          <p>
            I'm a skilled developer with substantial experience working on the
            full stack. I'm proficient in Python and am comfortable working with
            HTML, CSS, Javascript, SQL, C, Java, the command line, and whatever
            else you'd like to throw at me! In my spare time I like to take free
            online courses via Coursera and build webapps to get experience
            working with some new tech skill I haven't used before.
          </p>
        </Section>
        <Section id="biz-skills">
          <p>
            I have knowledge of the business world and a firm understanding of
            business logic. In school, I've completed a new venture project and
            done business cases. I have learned a ton of Excel, VBA, and
            understand decision modeling using Crystal Ball and Arena. I've also
            taken accounting classes, business law, and so forth.
          </p>
        </Section>
        <Section id="resume">
          <p>
            If you like, you can take a look at my resume below.
            <br/>
            <a href="george-lifchits-resume.pdf">Click</a> for a PDF version to
            view in full screen)
          </p>
          <a className="resume" href="george-lifchits-resume.pdf">
            <img src="/src/images/resume.jpg" />
          </a>
        </Section>
        <Section id="contact">
          <p>You can connect with me on:</p>
          <ul>
            <li>
              <i className="fa fa-linkedin-square" />
              <a href="http://ca.linkedin.com/in/georgelifchits/">LinkedIn</a>,
            </li>
            <li>
              <i className="fa fa-github" />
              <a href="https://github.com/glifchits">Github</a>,
            </li>
            <li>
              <i className="fa fa-facebook-square" />
              <a href="https://www.facebook.com/george.lifchits">Facebook</a>, or
            </li>
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:me@georgelifchits.ca">email</a>.
            </li>
          </ul>
          <p>
            Please contact me with employment opportunities, constructive feedback,
            YouTube videos of amazing bass players, or for any reason whatsoever!
            I love talking to people and would equally love to hear from you. Connect
            with me in the way you're most comfortable with.
            </p>
        </Section>
      </main>
    );
  }

}
