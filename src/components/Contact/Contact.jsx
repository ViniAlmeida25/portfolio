import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

function Contact () {
  return (
    <div className="p-10 pb-28 grid grid-cols-6 gap-8 max-sm:block">

      <div  className="col-span-4">
        <h4 className="text-3xl font-bold">Let's work together</h4>
        <div className="mt-2">
          <p className="text-lg">
            C<p>•Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam optio excepturi.</p>
          </p>
        </div>
      </div>
      <div className="col-span-2 text-left max-sm:mt-10">
        <div>
         <label className="font-bold text-lg">Email</label>
          <p>vinicius@mail.com</p>
        </div>
        <div className="mt-4">
         <label className="font-bold text-lg">Phone</label>
          <p>+55 1398123-6397</p>
        </div>
        <div className="mt-4">
         <label className="font-bold text-lg">Social</label>
         <div className=" flex justify-start mt-2 gap-6">
            <a href="#" target="_blank">
              <LinkedInLogoIcon className="size-5"/>
            </a>
            <a href="#" target="_blank">
              <GitHubLogoIcon className="size-5"/>
            </a>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
