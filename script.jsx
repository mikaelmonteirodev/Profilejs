function Profile(props){
   return <div id="profile">
      <h1>{props.nome}</h1>
      <p>{props.description}</p> <br />      
      {props.children}
   </div>;
}

function ProfileLinks(props){
   const twitter = props.twitter;
   const linkedin = props.linkedin;
   const github = props.github;
   return <div id="links">     
     Github:  <a href={"https://github.com/" + github}> @{github} </a>
     <br />
     Linkedin:  <a href={"https://linkedin.com/in/" + linkedin}> @{linkedin} </a>
     <br />
     Twitter:  <a href={"https://twitter.com/" + twitter}> @{twitter} </a>
     <br />     
   </div>;  
}

function ProfileSkills(props){
   const conteudo = props.children;
   return <div className="pictures">{conteudo}</div>;
}

function JSSkill(){
   return <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JS" />;
}

function Html5Skill() {
   return <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML" />;
}

function CSSSkill(){
   return <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS" />;
}

function NodeSkill(){
   return <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="Node" />;
}

function App() {
   return <Profile
      nome="Mikael Monteiro"
      description="👨‍💻 I'm a Full Stack development student at Digital College in Fortaleza | Ceará | Brazil 🤩 I love technology, music, comedy, my friends and family 🤔 I have a lot of ideas in my mind and I'm interested in collaborating with the developer community.">
     
         <ProfileLinks 
            github="mikaelmonteirodev"
            twitter="mikaelmonteiro"
            linkedin="mikaelmonteiro"
         />

         <ProfileSkills>
            <JSSkill />
            <Html5Skill />
            <CSSSkill />
            <NodeSkill />
         </ProfileSkills>
      </Profile>
}

ReactDOM.render(<App />, document.getElementById('app'));

 
