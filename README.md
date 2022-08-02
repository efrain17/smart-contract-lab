Python blockchain
==============================================


Python blockchain is designed under
-----------
* Python 3 + Clear architecture + Exagonal architecture + serverless
  http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
* TDD pytest
* Typing rules under the PEP-8 standard controlled under pylint
* ![Alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)


Install
-----------
* virtualenv --python=python3 venv
* source venv/bin/activate
* pip install -e .

Run test
-----------
* pip install -e ".[testing]"
* pytest tests/

Run integration test
-----------
* pytest -m integtest

Run lint 
-----------
* pylint src/
* styles based on http://google.github.io/styleguide/pyguide.html

Run coverage
-----------
* pip install pytest-cov
* py.test --cov=src/ tests/ --cov-report html
* current test coverage 100%

Debug
-----------
-- Put an assert 0 where you want to start debugging 
Run py.test --pdb 

What's Here
-----------

This sample includes:

* README.md - this file
* tests/ - this directory contains unit tests for your application
* pylintrc - styles based on http://google.github.io/styleguide/pyguide.html
