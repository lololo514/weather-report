const NoResultsDiv = () => {
    return <div className="no-results ">
        <img src="icons/no-results.png" alt="No results found" 
        className="iocn"/>
        <h3 className="titel" >无事发生</h3>
        <p className="message">请输入有效的城市名称</p>
    </div>;
};

export default NoResultsDiv;