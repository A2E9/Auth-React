import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'

const CustButton = (props) => {
  const router = useRouter()



  const handleClick = (e) => {
    e.preventDefault()
    if(props.href){
    router.push({
      pathname: props.href,
      
    })
  }
  }
  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        onClick={props.href ? handleClick : props.onClick}
        href={props.href}
      
        // className="btn"
        // onClick={async () => {
        //   await props.onClick();
        // }}
      >
        {props.loading ? (
          <FontAwesomeIcon icon={faSpinner} spin height={'20px'} />
        ) : (
          props.buttonValue
        )}
      </button>
    </div>
  );
};
export default CustButton;
