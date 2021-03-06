import { useEffect } from 'react'

export default function ApplyButton(props) { 
  const loadApplyNowScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    document.body.appendChild(script);
  };
  
  useEffect(() => {
    window.onload = loadApplyNowScript()
  }, [])

  return (
    <div 
      className="apply-button" 
      data-hackathon-slug="econhacks" 
      data-button-theme="light"
      style={{"height": "44px", "width": "312px"}}
    ></div>
  )
}
