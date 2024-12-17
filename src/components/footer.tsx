export default function Footer() {
    return (
        <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
                <div className="flex md:flex-row flex-col items-center gap-x-2">
                    <h3 className="font-inter">Built with:</h3>
                </div>

                <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
                    {/* <a
              className="flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-center mb-3    font-bold tracking-tight"
              href="https://github.com/Evavic44/victoreke.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BiLogoGithub />
              Stars <em className="text-primary-color not-italic">3,329</em>
            </a> */}

                    <small className="text-zinc-500">
                        Copyright &copy; Victor Eke {new Date().getFullYear()}{" "}
                        All rights Reserved
                    </small>
                </div>
            </div>
        </footer>
    );
}
