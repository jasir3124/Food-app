import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
export default function QuoteSection(){
    return(
        <div className='section quote'>
            <p className="quoteText"><FontAwesomeIcon icon={faQuoteLeft}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante tempor, rutrum mauris ac, porta est. Nulla fermentum metus sit amet justo sollicitudin, non semper tortor pretium. In volutpat posuere diam eget sollicitudin. Maecenas ultricies, eros vitae sagittis vulputate, sapien lectus consectetur ex, eget maximus lorem est vel eros.</p>
            <p className="QuoteAuther">- Lorem Ipsum</p>
        </div>
    )
}