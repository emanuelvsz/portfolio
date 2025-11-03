import { PropsWithChildren } from "react";

import { Account } from "@core/domain/models/account";

interface Props {
	account?: Account;
}

const RoleProviders = ({ children }: PropsWithChildren<Props>) =>
	children as JSX.Element;

const BaseProviders = ({ children }: PropsWithChildren) =>
	children as JSX.Element;

const ProviderManager = ({ children, account }: PropsWithChildren<Props>) => (
	<BaseProviders>
		<RoleProviders account={account}>{children}</RoleProviders>
	</BaseProviders>
);

export default ProviderManager;
