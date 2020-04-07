import React from 'react';
import Action from './Action.js';
import Header from './Header.js';
import AddOption from './AddOption.js';
import Options from './Options.js';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);

    //     this.state = {
    //         options: props.options
    //     };
    // }

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';

        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exist';

        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }

    //React component life cycle
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.options + 'asd');
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); //since loc str works with strings so we have to stringify json obj.

        }
    }

    componentWillUnmount() {

    }

    render() {
        const subtitile = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitile={subtitile}></Header>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}>
                    </Action>
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}>
                        </Options>
                        <AddOption handleAddOption={this.handleAddOption}></AddOption>

                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}>
                </OptionModal>
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }